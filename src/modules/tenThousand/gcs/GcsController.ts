import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcs")
export default class GcsController {
  @operation({
    summary: "Get Gcs",
  })
  @get()
  static getGcs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gcs",
  })
  @post("{id}")
  static createGcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
