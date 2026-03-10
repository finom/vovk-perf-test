import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgu")
export default class FguController {
  @operation({
    summary: "Get Fgu",
  })
  @get()
  static getFgu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fgu",
  })
  @post("{id}")
  static createFgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
