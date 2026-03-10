import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mty")
export default class MtyController {
  @operation({
    summary: "Get Mty",
  })
  @get()
  static getMty = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mty",
  })
  @post("{id}")
  static createMty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
