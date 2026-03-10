import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fy")
export default class FyController {
  @operation({
    summary: "Get Fy",
  })
  @get()
  static getFy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fy",
  })
  @post("{id}")
  static createFy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
