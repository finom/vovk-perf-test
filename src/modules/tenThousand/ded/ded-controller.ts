import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ded")
export default class DedController {
  @operation({
    summary: "Get Ded",
  })
  @get()
  static getDed = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ded",
  })
  @post("{id}")
  static createDed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
