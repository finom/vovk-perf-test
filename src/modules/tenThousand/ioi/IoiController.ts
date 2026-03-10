import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ioi")
export default class IoiController {
  @operation({
    summary: "Get Ioi",
  })
  @get()
  static getIoi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ioi",
  })
  @post("{id}")
  static createIoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
