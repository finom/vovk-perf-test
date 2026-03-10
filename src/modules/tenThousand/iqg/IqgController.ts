import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqg")
export default class IqgController {
  @operation({
    summary: "Get Iqg",
  })
  @get()
  static getIqg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iqg",
  })
  @post("{id}")
  static createIqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
