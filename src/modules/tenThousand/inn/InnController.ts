import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inn")
export default class InnController {
  @operation({
    summary: "Get Inn",
  })
  @get()
  static getInn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Inn",
  })
  @post("{id}")
  static createInn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
