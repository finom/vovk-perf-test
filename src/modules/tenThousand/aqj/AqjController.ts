import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqj")
export default class AqjController {
  @operation({
    summary: "Get Aqj",
  })
  @get()
  static getAqj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aqj",
  })
  @post("{id}")
  static createAqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
