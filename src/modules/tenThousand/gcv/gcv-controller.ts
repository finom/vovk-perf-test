import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcv")
export default class GcvController {
  @operation({
    summary: "Get Gcv",
  })
  @get()
  static getGcv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gcv",
  })
  @post("{id}")
  static createGcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
