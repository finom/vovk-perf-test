import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("og")
export default class OgController {
  @operation({
    summary: "Get Og",
  })
  @get()
  static getOg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Og",
  })
  @post("{id}")
  static createOg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
