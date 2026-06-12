import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfd")
export default class GfdController {
  @operation({
    summary: "Get Gfd",
  })
  @get()
  static getGfd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfd",
  })
  @post("{id}")
  static createGfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
