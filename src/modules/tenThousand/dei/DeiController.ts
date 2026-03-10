import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dei")
export default class DeiController {
  @operation({
    summary: "Get Dei",
  })
  @get()
  static getDei = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dei",
  })
  @post("{id}")
  static createDei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
