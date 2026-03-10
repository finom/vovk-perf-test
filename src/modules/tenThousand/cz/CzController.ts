import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cz")
export default class CzController {
  @operation({
    summary: "Get Cz",
  })
  @get()
  static getCz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cz",
  })
  @post("{id}")
  static createCz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
