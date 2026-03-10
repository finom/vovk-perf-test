import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifj")
export default class IfjController {
  @operation({
    summary: "Get Ifj",
  })
  @get()
  static getIfj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ifj",
  })
  @post("{id}")
  static createIfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
