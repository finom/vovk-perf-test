import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lov")
export default class LovController {
  @operation({
    summary: "Get Lov",
  })
  @get()
  static getLov = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lov",
  })
  @post("{id}")
  static createLov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
