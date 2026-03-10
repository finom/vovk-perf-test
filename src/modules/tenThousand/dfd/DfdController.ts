import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfd")
export default class DfdController {
  @operation({
    summary: "Get Dfd",
  })
  @get()
  static getDfd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dfd",
  })
  @post("{id}")
  static createDfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
