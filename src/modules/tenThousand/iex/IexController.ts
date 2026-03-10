import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iex")
export default class IexController {
  @operation({
    summary: "Get Iex",
  })
  @get()
  static getIex = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iex",
  })
  @post("{id}")
  static createIex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
