import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvn")
export default class GvnController {
  @operation({
    summary: "Get Gvn",
  })
  @get()
  static getGvn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvn",
  })
  @post("{id}")
  static createGvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
