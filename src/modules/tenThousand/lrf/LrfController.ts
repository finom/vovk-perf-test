import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrf")
export default class LrfController {
  @operation({
    summary: "Get Lrf",
  })
  @get()
  static getLrf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lrf",
  })
  @post("{id}")
  static createLrf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
