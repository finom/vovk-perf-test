import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iic")
export default class IicController {
  @operation({
    summary: "Get Iic",
  })
  @get()
  static getIic = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iic",
  })
  @post("{id}")
  static createIic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
