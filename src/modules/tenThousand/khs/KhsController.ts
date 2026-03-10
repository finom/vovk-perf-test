import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khs")
export default class KhsController {
  @operation({
    summary: "Get Khs",
  })
  @get()
  static getKhs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Khs",
  })
  @post("{id}")
  static createKhs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
