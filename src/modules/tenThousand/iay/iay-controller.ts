import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iay")
export default class IayController {
  @operation({
    summary: "Get Iay",
  })
  @get()
  static getIay = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iay",
  })
  @post("{id}")
  static createIay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
