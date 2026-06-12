import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isv")
export default class IsvController {
  @operation({
    summary: "Get Isv",
  })
  @get()
  static getIsv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Isv",
  })
  @post("{id}")
  static createIsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
