import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhu")
export default class NhuController {
  @operation({
    summary: "Get Nhu",
  })
  @get()
  static getNhu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhu",
  })
  @post("{id}")
  static createNhu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
