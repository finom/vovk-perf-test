import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyj")
export default class IyjController {
  @operation({
    summary: "Get Iyj",
  })
  @get()
  static getIyj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iyj",
  })
  @post("{id}")
  static createIyj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
