import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fut")
export default class FutController {
  @operation({
    summary: "Get Fut",
  })
  @get()
  static getFut = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fut",
  })
  @post("{id}")
  static createFut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
