import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdo")
export default class KdoController {
  @operation({
    summary: "Get Kdo",
  })
  @get()
  static getKdo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kdo",
  })
  @post("{id}")
  static createKdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
