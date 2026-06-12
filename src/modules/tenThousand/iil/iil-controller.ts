import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iil")
export default class IilController {
  @operation({
    summary: "Get Iil",
  })
  @get()
  static getIil = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iil",
  })
  @post("{id}")
  static createIil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
