import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ily")
export default class IlyController {
  @operation({
    summary: "Get Ily",
  })
  @get()
  static getIly = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ily",
  })
  @post("{id}")
  static createIly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
