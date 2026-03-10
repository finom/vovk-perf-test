import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byz")
export default class ByzController {
  @operation({
    summary: "Get Byz",
  })
  @get()
  static getByz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Byz",
  })
  @post("{id}")
  static createByz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
