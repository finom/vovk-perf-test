import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibk")
export default class IbkController {
  @operation({
    summary: "Get Ibk",
  })
  @get()
  static getIbk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibk",
  })
  @post("{id}")
  static createIbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
