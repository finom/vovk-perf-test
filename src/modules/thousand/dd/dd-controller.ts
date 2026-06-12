import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dd")
export default class DdController {
  @operation({
    summary: "Get Dd",
  })
  @get()
  static getDd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dd",
  })
  @post("{id}")
  static createDd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
