import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvw")
export default class GvwController {
  @operation({
    summary: "Get Gvw",
  })
  @get()
  static getGvw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvw",
  })
  @post("{id}")
  static createGvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
