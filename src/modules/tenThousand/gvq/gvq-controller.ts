import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvq")
export default class GvqController {
  @operation({
    summary: "Get Gvq",
  })
  @get()
  static getGvq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvq",
  })
  @post("{id}")
  static createGvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
