import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itr")
export default class ItrController {
  @operation({
    summary: "Get Itr",
  })
  @get()
  static getItr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itr",
  })
  @post("{id}")
  static createItr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
