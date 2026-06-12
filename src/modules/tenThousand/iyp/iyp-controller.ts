import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyp")
export default class IypController {
  @operation({
    summary: "Get Iyp",
  })
  @get()
  static getIyp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iyp",
  })
  @post("{id}")
  static createIyp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
