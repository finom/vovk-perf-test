import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ieq")
export default class IeqController {
  @operation({
    summary: "Get Ieq",
  })
  @get()
  static getIeq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ieq",
  })
  @post("{id}")
  static createIeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
