import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gik")
export default class GikController {
  @operation({
    summary: "Get Gik",
  })
  @get()
  static getGik = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gik",
  })
  @post("{id}")
  static createGik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
