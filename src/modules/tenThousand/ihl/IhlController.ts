import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihl")
export default class IhlController {
  @operation({
    summary: "Get Ihl",
  })
  @get()
  static getIhl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ihl",
  })
  @post("{id}")
  static createIhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
