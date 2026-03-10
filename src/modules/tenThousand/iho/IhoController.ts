import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iho")
export default class IhoController {
  @operation({
    summary: "Get Iho",
  })
  @get()
  static getIho = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iho",
  })
  @post("{id}")
  static createIho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
