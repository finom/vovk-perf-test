import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdy")
export default class GdyController {
  @operation({
    summary: "Get Gdy",
  })
  @get()
  static getGdy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdy",
  })
  @post("{id}")
  static createGdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
