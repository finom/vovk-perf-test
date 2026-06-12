import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrf")
export default class MrfController {
  @operation({
    summary: "Get Mrf",
  })
  @get()
  static getMrf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mrf",
  })
  @post("{id}")
  static createMrf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
