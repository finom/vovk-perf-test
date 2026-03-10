import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqy")
export default class IqyController {
  @operation({
    summary: "Get Iqy",
  })
  @get()
  static getIqy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iqy",
  })
  @post("{id}")
  static createIqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
