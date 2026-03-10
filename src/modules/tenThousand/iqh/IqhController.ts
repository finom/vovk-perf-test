import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqh")
export default class IqhController {
  @operation({
    summary: "Get Iqh",
  })
  @get()
  static getIqh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iqh",
  })
  @post("{id}")
  static createIqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
