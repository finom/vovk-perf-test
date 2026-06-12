import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("doe")
export default class DoeController {
  @operation({
    summary: "Get Doe",
  })
  @get()
  static getDoe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Doe",
  })
  @post("{id}")
  static createDoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
