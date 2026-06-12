import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqw")
export default class IqwController {
  @operation({
    summary: "Get Iqw",
  })
  @get()
  static getIqw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iqw",
  })
  @post("{id}")
  static createIqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
