import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqs")
export default class IqsController {
  @operation({
    summary: "Get Iqs",
  })
  @get()
  static getIqs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iqs",
  })
  @post("{id}")
  static createIqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
