import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tj")
export default class TjController {
  @operation({
    summary: "Get Tj",
  })
  @get()
  static getTj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Tj",
  })
  @post("{id}")
  static createTj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
