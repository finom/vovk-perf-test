import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhp")
export default class DhpController {
  @operation({
    summary: "Get Dhp",
  })
  @get()
  static getDhp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhp",
  })
  @post("{id}")
  static createDhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
