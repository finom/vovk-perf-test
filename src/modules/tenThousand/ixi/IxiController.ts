import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixi")
export default class IxiController {
  @operation({
    summary: "Get Ixi",
  })
  @get()
  static getIxi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixi",
  })
  @post("{id}")
  static createIxi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
