import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ieh")
export default class IehController {
  @operation({
    summary: "Get Ieh",
  })
  @get()
  static getIeh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ieh",
  })
  @post("{id}")
  static createIeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
