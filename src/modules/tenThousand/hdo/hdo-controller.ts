import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdo")
export default class HdoController {
  @operation({
    summary: "Get Hdo",
  })
  @get()
  static getHdo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hdo",
  })
  @post("{id}")
  static createHdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
