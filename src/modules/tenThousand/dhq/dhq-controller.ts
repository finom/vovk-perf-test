import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhq")
export default class DhqController {
  @operation({
    summary: "Get Dhq",
  })
  @get()
  static getDhq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhq",
  })
  @post("{id}")
  static createDhq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
