import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nin")
export default class NinController {
  @operation({
    summary: "Get Nin",
  })
  @get()
  static getNin = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nin",
  })
  @post("{id}")
  static createNin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
