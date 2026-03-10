import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iey")
export default class IeyController {
  @operation({
    summary: "Get Iey",
  })
  @get()
  static getIey = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iey",
  })
  @post("{id}")
  static createIey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
